import 'package:cross_website_admin/career_page.dart';
import 'package:cross_website_admin/constants/app_styles.dart';
import 'package:cross_website_admin/constants/custom_selectable_text.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;

  final List<NavigationItem> _navigationItems = [
    NavigationItem(
      icon: Icons.work,
      label: 'Tuyển dụng',
      page: const CareerPage(),
    ),
    NavigationItem(
      icon: Icons.people,
      label: 'Nhân viên',
      page: const Center(
        child: Text(
          'Nhân viên Screen',
          style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
        ),
      ),
    ),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: LayoutBuilder(
        builder: (context, constraints) {
          // Desktop layout (width >= 768)
          if (constraints.maxWidth >= 768) {
            return Column(children: [_buildAppBar(), _buildBody()]);
          }
          // Mobile layout (width < 768)
          else {
            return Scaffold(
              drawer: Drawer(child: _buildDrawer()),
              body: Column(
                children: [
                  _buildAppBar(),
                  Expanded(child: _navigationItems[_selectedIndex].page),
                ],
              ),
            );
          }
        },
      ),
    );
  }

  Expanded _buildBody() {
    return Expanded(
      child: Row(
        children: [
          // Sidebar
          Container(
            width: 250,
            color: AppStyles.backgroundGrey,
            child: _buildSidebar(),
          ),
          // Main content
          Expanded(child: _navigationItems[_selectedIndex].page),
        ],
      ),
    );
  }

  Widget _buildAppBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
      decoration: BoxDecoration(
        color: AppStyles.backgroundGrey,
        border: Border(bottom: BorderSide(color: Colors.grey[300]!, width: 1)),
      ),
      child: Row(
        children: [
          // Drawer icon for mobile
          LayoutBuilder(
            builder: (context, constraints) {
              if (MediaQuery.of(context).size.width < 768) {
                return IconButton(
                  icon: const Icon(Icons.menu),
                  onPressed: () {
                    Scaffold.of(context).openDrawer();
                  },
                );
              } else {
                return const SizedBox.shrink();
              }
            },
          ),
          Image.asset('images/x_cross.png', width: 60, height: 60),
          CustomSelectableText(
            text: 'Cross Website Admin',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          Spacer(),
          CircleAvatar(
            child: Image.asset('images/x_cross.png', width: 60, height: 60),
          ),
        ],
      ),
    );
  }

  Widget _buildSidebar() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Navigation items
        Expanded(
          child: ListView.builder(
            padding: const EdgeInsets.symmetric(vertical: 8),
            itemCount: _navigationItems.length,
            itemBuilder: (context, index) {
              final item = _navigationItems[index];
              final isSelected = _selectedIndex == index;

              return Container(
                margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 2),
                decoration: BoxDecoration(
                  color: isSelected ? Colors.blue.withValues(alpha: 0.1) : null,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: ListTile(
                  leading: Icon(
                    item.icon,
                    color: isSelected
                        ? AppStyles.primaryColor
                        : Colors.grey[600],
                    size: 20,
                  ),
                  title: CustomSelectableText(
                    text: item.label,
                    style: TextStyle(
                      color: isSelected ? Colors.blue : Colors.grey[800],
                      fontWeight: isSelected
                          ? FontWeight.w600
                          : FontWeight.normal,
                      fontSize: 14,
                    ),
                  ),
                  onTap: () {
                    setState(() {
                      _selectedIndex = index;
                    });
                  },
                  contentPadding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 4,
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _buildDrawer() {
    return Container(
      decoration: BoxDecoration(color: AppStyles.backgroundGrey),
      child: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              border: Border(
                bottom: BorderSide(color: Colors.grey[300]!, width: 1),
              ),
            ),
            padding: const EdgeInsets.symmetric(
              horizontal: 16.0,
              vertical: 10.0,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                CustomSelectableText(
                  text: 'Menu',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                IconButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  icon: Icon(Icons.close),
                ),
              ],
            ),
          ),
          // Navigation items
          Expanded(
            child: ListView.builder(
              padding: EdgeInsets.zero,
              itemCount: _navigationItems.length,
              itemBuilder: (context, index) {
                final item = _navigationItems[index];
                final isSelected = _selectedIndex == index;

                return ListTile(
                  leading: Icon(
                    item.icon,
                    color: isSelected ? Colors.blue : Colors.grey[600],
                  ),
                  title: CustomSelectableText(
                    text: item.label,
                    style: TextStyle(
                      color: isSelected ? Colors.blue : Colors.grey[800],
                      fontWeight: isSelected
                          ? FontWeight.w600
                          : FontWeight.normal,
                    ),
                  ),
                  selected: isSelected,
                  onTap: () {
                    setState(() {
                      _selectedIndex = index;
                    });
                    Navigator.pop(context); // Đóng drawer sau khi chọn
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class NavigationItem {
  final IconData icon;
  final String label;
  final Widget page;

  NavigationItem({required this.icon, required this.label, required this.page});
}
