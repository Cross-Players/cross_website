// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:cross_website/components/common/button_primary_black.dart'
    as prefix0;
import 'package:cross_website/components/common/custom_grid.dart' as prefix1;
import 'package:cross_website/components/common/menu_button.dart' as prefix2;
import 'package:cross_website/components/common/title_icon_home.dart'
    as prefix3;
import 'package:cross_website/components/home_page/card_process_block.dart'
    as prefix4;
import 'package:cross_website/components/home_page/case_studies_block.dart'
    as prefix5;
import 'package:cross_website/components/home_page/contact_us_block.dart'
    as prefix6;
import 'package:cross_website/components/home_page/cta_block.dart' as prefix7;
import 'package:cross_website/components/home_page/footer_block.dart'
    as prefix8;
import 'package:cross_website/components/home_page/header_home_page.dart'
    as prefix9;
import 'package:cross_website/components/home_page/item_services.dart'
    as prefix10;
import 'package:cross_website/components/home_page/list_logo.dart' as prefix11;
import 'package:cross_website/components/header.dart' as prefix12;
import 'package:cross_website/constants/app_colors.dart' as prefix13;
import 'package:cross_website/constants/theme_toogle.dart' as prefix14;
import 'package:cross_website/pages/about_new.dart' as prefix15;
import 'package:cross_website/pages/admin.dart' as prefix16;
import 'package:cross_website/pages/career.dart' as prefix17;
import 'package:cross_website/pages/home.dart' as prefix18;
import 'package:cross_website/pages/loading_screen.dart' as prefix19;
import 'package:cross_website/app.dart' as prefix20;

/// Default [JasprOptions] for use with your jaspr project.
///
/// Use this to initialize jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'jaspr_options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultJasprOptions,
///   );
///
///   runApp(...);
/// }
/// ```
JasprOptions get defaultJasprOptions => JasprOptions(
  clients: {
    prefix20.App: ClientTarget<prefix20.App>('app'),

    prefix15.AboutNew: ClientTarget<prefix15.AboutNew>('pages/about_new'),

    prefix16.Admin: ClientTarget<prefix16.Admin>('pages/admin'),

    prefix17.Career: ClientTarget<prefix17.Career>('pages/career'),

    prefix18.Home: ClientTarget<prefix18.Home>('pages/home'),
  },
  styles: () => [
    ...prefix0.ButtonPrimaryBlack.styles,
    ...prefix1.CustomGrid.styles,

    ...prefix2.MenuButton.styles,
    ...prefix3.TitleIconHome.styles,
    ...prefix4.CardProcessBlockState.style,
    ...prefix5.CaseStudiesBlock.style,
    ...prefix6.ContactUsBlockState.style,
    ...prefix7.CtaBlock.style,
    ...prefix8.FooterBlock.style,
    ...prefix9.HeaderHomePage.styles,
    ...prefix10.ItemServices.styles,
    ...prefix11.ListLogo.styles,
    ...prefix12.HeaderState.styles,
    ...prefix13.root,
    ...prefix14.ThemeToggleState.styles,
    ...prefix15.AboutNew.styles,
    ...prefix17.Career.styles,
    ...prefix18.HomeState.styles,
    ...prefix19.LoadingScreen.styles,

    ...prefix20.AppState.styles,
  ],
);
