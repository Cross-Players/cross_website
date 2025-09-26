import 'package:cross_website_admin/constants/app_styles.dart';
import 'package:cross_website_admin/constants/app_utils.dart';
import 'package:cross_website_admin/constants/custom_selectable_text.dart';
import 'package:cross_website_admin/models/employee.dart';
import 'package:cross_website_admin/services/employee_service.dart';
import 'package:flutter/material.dart';

class EmployeePage extends StatefulWidget {
  const EmployeePage({super.key});

  @override
  State<EmployeePage> createState() => _EmployeePageState();
}

class _EmployeePageState extends State<EmployeePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                CustomSelectableText(
                  text: 'Quản lý nhân viên',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
                const Spacer(),
                ElevatedButton.icon(
                  onPressed: () => _showAddEmployeeDialog(context),
                  icon: const Icon(Icons.add, color: Colors.white, size: 18),
                  label: const Text(
                    'Add Employee',
                    style: TextStyle(color: Colors.white, fontSize: 14),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppStyles.primaryColor,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
                      vertical: 12,
                    ),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    elevation: 0,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),
            // Employee list
            Expanded(child: _buildEmployeeList()),
          ],
        ),
      ),
    );
  }

  Widget _buildEmployeeList() {
    return StreamBuilder<List<Employee>>(
      stream: EmployeeService.getEmployeesStream(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }

        if (snapshot.hasError) {
          return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.error, size: 64, color: Colors.red),
                const SizedBox(height: 16),
                CustomSelectableText(text: 'Lỗi: ${snapshot.error}'),
                const SizedBox(height: 16),
                ElevatedButton(
                  onPressed: () => setState(() {}),
                  child: const CustomSelectableText(text: 'Thử lại'),
                ),
              ],
            ),
          );
        }

        final employees = snapshot.data ?? [];

        if (employees.isEmpty) {
          return const Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.work_off, size: 64, color: Colors.grey),
                SizedBox(height: 16),
                CustomSelectableText(text: 'Chưa có nhân viên nào'),
              ],
            ),
          );
        }

        return ListView.builder(
          itemCount: employees.length,
          itemBuilder: (context, index) {
            final employee = employees[index];
            return _buildEmployeeCard(employee, context);
          },
        );
      },
    );
  }

  Widget _buildEmployeeCard(Employee employee, BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.grey[200]!),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 30,
            backgroundImage: employee.avatarUrl.isNotEmpty
                ? NetworkImage(employee.avatarUrl)
                : const AssetImage('assets/avatar_placeholder.png')
                      as ImageProvider,
            backgroundColor: Colors.grey[200],
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Employee name
                CustomSelectableText(
                  text: employee.name,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                    color: Colors.black87,
                  ),
                ),
                const SizedBox(height: 12),
                // Employee details
                _buildEmployeeDetail(
                  Icons.work,
                  "Vị trí: ${employee.position}",
                ),
                const SizedBox(height: 8),
                // Email
                _buildEmployeeDetail(Icons.email, "Email: ${employee.email}"),
                const SizedBox(height: 8),
                // Phone
                _buildEmployeeDetail(
                  Icons.phone,
                  "Điện thoại: ${employee.phone}",
                ),
                const SizedBox(height: 8),
                // Status
                _buildEmployeeDetail(
                  Icons.info,
                  "Trạng thái: ${employee.status}",
                ),
                if (employee.experience.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  // Experience
                  _buildEmployeeDetail(
                    Icons.timeline,
                    "Kinh nghiệm: ${employee.experience}",
                  ),
                ],
                if (employee.description.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  // Description
                  _buildEmployeeDetail(
                    Icons.description,
                    "Mô tả: ${employee.description}",
                  ),
                ],
                if (employee.cvUrl != null && employee.cvUrl!.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  // CV URL
                  Row(
                    children: [
                      const Icon(Icons.link, size: 16, color: Colors.blue),
                      const SizedBox(width: 6),
                      Expanded(
                        child: InkWell(
                          onTap: () => AppUtils().appLaunchUrl(employee.cvUrl!),
                          child: Text(
                            employee.cvUrl!,
                            style: const TextStyle(
                              color: Colors.blue,
                              decoration: TextDecoration.underline,
                              fontSize: 14,
                            ),
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(width: 10),
          // Action menu
          PopupMenuButton<String>(
            color: Colors.white,
            onSelected: (value) async {
              if (value == 'edit') {
                _showAddEmployeeDialog(context, employee);
              } else if (value == 'delete') {
                _showDeleteDialog(employee);
              }
            },
            itemBuilder: (context) => [
              const PopupMenuItem(
                value: 'edit',
                child: Row(
                  children: [
                    Icon(Icons.edit, color: Colors.blue, size: 18),
                    SizedBox(width: 8),
                    Text('Chỉnh sửa'),
                  ],
                ),
              ),
              const PopupMenuItem(
                value: 'delete',
                child: Row(
                  children: [
                    Icon(Icons.delete, color: Colors.red, size: 18),
                    SizedBox(width: 8),
                    Text('Xóa'),
                  ],
                ),
              ),
            ],
            child: Container(
              padding: const EdgeInsets.all(4),
              decoration: BoxDecoration(
                color: Colors.grey[100],
                borderRadius: BorderRadius.circular(4),
              ),
              child: const Icon(Icons.more_vert, color: Colors.grey, size: 20),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEmployeeDetail(IconData icon, String text) {
    return Row(
      children: [
        Icon(icon, size: 16, color: Colors.grey[600]),
        const SizedBox(width: 6),
        Expanded(
          child: CustomSelectableText(
            text: text,
            style: const TextStyle(fontSize: 14, color: Colors.black54),
          ),
        ),
      ],
    );
  }

  void _showAddEmployeeDialog(BuildContext context, [Employee? employee]) {
    showDialog(
      context: context,
      builder: (context) => _AddEmployeeDialog(employee: employee),
    );
  }

  void _showDeleteDialog(Employee employee) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const CustomSelectableText(text: 'Xác nhận xóa'),
        content: CustomSelectableText(
          text: 'Bạn có chắc chắn muốn xóa nhân viên "${employee.name}"?',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const CustomSelectableText(text: 'Hủy'),
          ),
          TextButton(
            onPressed: () async {
              Navigator.pop(context);
              try {
                await EmployeeService.deleteEmployee(employee.id);
                if (mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: CustomSelectableText(
                        text: 'Xóa nhân viên thành công',
                      ),
                      backgroundColor: Colors.green,
                    ),
                  );
                }
              } catch (e) {
                if (mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: CustomSelectableText(text: 'Lỗi khi xóa: $e'),
                      backgroundColor: Colors.red,
                    ),
                  );
                }
              }
            },
            style: TextButton.styleFrom(foregroundColor: Colors.red),
            child: const CustomSelectableText(text: 'Xóa'),
          ),
        ],
      ),
    );
  }
}

class _AddEmployeeDialog extends StatefulWidget {
  final Employee? employee;

  const _AddEmployeeDialog({this.employee});

  @override
  State<_AddEmployeeDialog> createState() => _AddEmployeeDialogState();
}

class _AddEmployeeDialogState extends State<_AddEmployeeDialog> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _positionController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _emailController = TextEditingController();
  final _phoneController = TextEditingController();
  final _experienceController = TextEditingController();
  final _avatarUrlController = TextEditingController();
  final _cvUrlController = TextEditingController();

  String _selectedStatus = 'Active';
  final List<String> _statusOptions = ['Active', 'Inactive', 'On Leave'];

  bool _isLoading = false;
  bool get _isEditing => widget.employee != null;

  @override
  void initState() {
    super.initState();
    if (_isEditing) {
      _nameController.text = widget.employee!.name;
      _positionController.text = widget.employee!.position;
      _descriptionController.text = widget.employee!.description;
      _emailController.text = widget.employee!.email;
      _phoneController.text = widget.employee!.phone;
      _experienceController.text = widget.employee!.experience;
      _avatarUrlController.text = widget.employee!.avatarUrl;
      _cvUrlController.text = widget.employee!.cvUrl ?? '';
      _selectedStatus = widget.employee!.status.isNotEmpty
          ? widget.employee!.status
          : 'Active';
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    _positionController.dispose();
    _descriptionController.dispose();
    _emailController.dispose();
    _phoneController.dispose();
    _experienceController.dispose();
    _avatarUrlController.dispose();
    _cvUrlController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.white,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Container(
        width: 500,
        constraints: BoxConstraints(
          maxHeight: MediaQuery.of(context).size.height * 0.8,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Header
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.grey[50],
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(12),
                  topRight: Radius.circular(12),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      CustomSelectableText(
                        text: _isEditing
                            ? 'Chỉnh sửa thông tin nhân viên'
                            : 'Thêm nhân viên mới',
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const Spacer(),
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: const Icon(Icons.close),
                        style: IconButton.styleFrom(
                          backgroundColor: Colors.grey[200],
                          padding: EdgeInsets.zero,
                          minimumSize: const Size(32, 32),
                        ),
                      ),
                    ],
                  ),
                  CustomSelectableText(
                    text: _isEditing
                        ? 'Chỉnh sửa thông tin nhân viên'
                        : 'Tạo thông tin nhân viên mới cho công ty',
                    style: TextStyle(color: Colors.grey[600], fontSize: 14),
                  ),
                ],
              ),
            ),

            // Body
            Flexible(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(20),
                child: Form(
                  key: _formKey,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Name Field
                      _buildTextField(
                        label: 'Tên nhân viên',
                        controller: _nameController,
                        hintText: 'Ví dụ: Nguyễn Văn A',
                        isRequired: true,
                        validator: (value) {
                          if (value?.trim().isEmpty ?? true) {
                            return 'Vui lòng nhập tên nhân viên';
                          }
                          return null;
                        },
                      ),

                      const SizedBox(height: 16),

                      // Position field
                      _buildTextField(
                        label: 'Vị trí công việc',
                        controller: _positionController,
                        hintText: 'Ví dụ: Flutter Developer',
                        isRequired: true,
                        validator: (value) {
                          if (value?.trim().isEmpty ?? true) {
                            return 'Vui lòng nhập vị trí công việc';
                          }
                          return null;
                        },
                      ),

                      const SizedBox(height: 16),

                      // Email field
                      _buildTextField(
                        label: 'Email',
                        controller: _emailController,
                        hintText: 'example@company.com',
                        isRequired: true,
                        validator: (value) {
                          if (value?.trim().isEmpty ?? true) {
                            return 'Vui lòng nhập email';
                          }
                          if (!RegExp(
                            r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
                          ).hasMatch(value!)) {
                            return 'Email không hợp lệ';
                          }
                          return null;
                        },
                      ),

                      const SizedBox(height: 16),

                      // Phone field
                      _buildTextField(
                        label: 'Số điện thoại',
                        controller: _phoneController,
                        hintText: '0123456789',
                        isRequired: true,
                        validator: (value) {
                          if (value?.trim().isEmpty ?? true) {
                            return 'Vui lòng nhập số điện thoại';
                          }
                          return null;
                        },
                      ),

                      const SizedBox(height: 16),

                      // Status dropdown
                      _buildDropdownField(
                        label: 'Trạng thái',
                        hintText: 'Chọn trạng thái',
                        value: _selectedStatus,
                        items: _statusOptions,
                        onChanged: (value) {
                          setState(() {
                            _selectedStatus = value!;
                          });
                        },
                      ),

                      const SizedBox(height: 16),

                      // Experience field
                      _buildTextField(
                        label: 'Kinh nghiệm',
                        controller: _experienceController,
                        hintText: 'Ví dụ: 2 năm kinh nghiệm Flutter',
                        isRequired: false,
                      ),

                      const SizedBox(height: 16),

                      // Description field
                      _buildTextField(
                        label: 'Mô tả',
                        controller: _descriptionController,
                        hintText: 'Mô tả chi tiết về nhân viên',
                        maxLines: 3,
                        isRequired: false,
                      ),

                      const SizedBox(height: 16),

                      // Avatar URL field
                      _buildTextField(
                        label: 'Avatar URL',
                        controller: _avatarUrlController,
                        hintText: 'https://example.com/avatar.jpg',
                        isRequired: false,
                        validator: (value) {
                          if (value != null && value.trim().isNotEmpty) {
                            final uri = Uri.tryParse(value);
                            if (uri == null || !uri.hasAbsolutePath) {
                              return 'Vui lòng nhập URL hợp lệ';
                            }
                          }
                          return null;
                        },
                      ),

                      const SizedBox(height: 16),

                      // CV URL field
                      _buildTextField(
                        label: 'CV URL',
                        controller: _cvUrlController,
                        hintText: 'https://example.com/cv.pdf',
                        isRequired: false,
                        validator: (value) {
                          if (value != null && value.trim().isNotEmpty) {
                            final uri = Uri.tryParse(value);
                            if (uri == null || !uri.hasAbsolutePath) {
                              return 'Vui lòng nhập URL hợp lệ';
                            }
                          }
                          return null;
                        },
                      ),
                    ],
                  ),
                ),
              ),
            ),

            // Footer
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                border: Border(top: BorderSide(color: Colors.grey[200]!)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  TextButton(
                    onPressed: _isLoading ? null : () => Navigator.pop(context),
                    child: const Text(
                      'Cancel',
                      style: TextStyle(fontSize: 18, color: Colors.black),
                    ),
                  ),
                  const SizedBox(width: 12),
                  ElevatedButton(
                    onPressed: _isLoading ? null : _saveEmployee,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppStyles.primaryColor,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 24,
                        vertical: 12,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(6),
                      ),
                    ),
                    child: _isLoading
                        ? const SizedBox(
                            height: 16,
                            width: 16,
                            child: CircularProgressIndicator(
                              color: Colors.white,
                              strokeWidth: 2,
                            ),
                          )
                        : Text(
                            _isEditing
                                ? 'Cập nhật nhân viên'
                                : 'Thêm nhân viên',
                            style: TextStyle(fontSize: 18),
                          ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTextField({
    required String label,
    required TextEditingController controller,
    required String hintText,
    bool isRequired = false,
    int maxLines = 1,
    String? Function(String?)? validator,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            CustomSelectableText(
              text: label,
              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
            ),
            if (isRequired)
              const CustomSelectableText(
                text: ' *',
                style: TextStyle(color: Colors.red),
              ),
          ],
        ),
        const SizedBox(height: 8),
        TextFormField(
          controller: controller,
          maxLines: maxLines,
          decoration: InputDecoration(
            hintText: hintText,
            hintStyle: TextStyle(color: Colors.grey[400]),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(6),
              borderSide: BorderSide(color: Colors.grey[300]!),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(6),
              borderSide: BorderSide(color: Colors.grey[300]!),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(6),
              borderSide: const BorderSide(color: Color(0xFF4F46E5)),
            ),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 12,
              vertical: 10,
            ),
          ),
          validator: validator,
        ),
      ],
    );
  }

  Widget _buildDropdownField({
    required String label,
    required String hintText,
    required String value,
    required List<String> items,
    required ValueChanged<String?> onChanged,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        CustomSelectableText(
          text: label,
          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
        ),
        const SizedBox(height: 8),
        DropdownButtonFormField<String>(
          value: value,
          decoration: InputDecoration(
            hintText: hintText,
            hintStyle: TextStyle(color: Colors.grey[400]),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(6),
              borderSide: BorderSide(color: Colors.grey[300]!),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(6),
              borderSide: BorderSide(color: Colors.grey[300]!),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(6),
              borderSide: const BorderSide(color: Color(0xFF4F46E5)),
            ),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 12,
              vertical: 10,
            ),
          ),
          items: items
              .map((item) => DropdownMenuItem(value: item, child: Text(item)))
              .toList(),
          onChanged: onChanged,
        ),
      ],
    );
  }

  Future<void> _saveEmployee() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    setState(() {
      _isLoading = true;
    });

    try {
      final employee = Employee(
        id: _isEditing ? widget.employee!.id : '',
        name: _nameController.text.trim(),
        position: _positionController.text.trim(),
        description: _descriptionController.text.trim(),
        email: _emailController.text.trim(),
        phone: _phoneController.text.trim(),
        status: _selectedStatus,
        experience: _experienceController.text.trim(),
        avatarUrl: _avatarUrlController.text.trim(),
        cvUrl: _cvUrlController.text.trim().isNotEmpty
            ? _cvUrlController.text.trim()
            : null,
      );

      if (_isEditing) {
        await EmployeeService.updateEmployee(employee);
      } else {
        await EmployeeService.addEmployee(employee);
      }

      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: CustomSelectableText(
              text: _isEditing
                  ? 'Cập nhật nhân viên thành công!'
                  : 'Thêm nhân viên thành công!',
            ),
            backgroundColor: Colors.green,
          ),
        );
        Navigator.pop(context);
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: CustomSelectableText(text: 'Lỗi: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }
}
