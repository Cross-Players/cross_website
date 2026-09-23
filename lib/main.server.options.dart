// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/server.dart';
import 'package:cross_website/components/common/button_primary_black.dart'
    as _button_primary_black;
import 'package:cross_website/components/common/custom_grid.dart'
    as _custom_grid;
import 'package:cross_website/components/common/menu_button.dart'
    as _menu_button;
import 'package:cross_website/components/common/title_icon_home.dart'
    as _title_icon_home;
import 'package:cross_website/components/home_page/card_process_block.dart'
    as _card_process_block;
import 'package:cross_website/components/home_page/case_studies_block.dart'
    as _case_studies_block;
import 'package:cross_website/components/home_page/contact_us_block.dart'
    as _contact_us_block;
import 'package:cross_website/components/home_page/cta_block.dart'
    as _cta_block;
import 'package:cross_website/components/home_page/footer_block.dart'
    as _footer_block;
import 'package:cross_website/components/home_page/header_home_page.dart'
    as _header_home_page;
import 'package:cross_website/components/home_page/item_services.dart'
    as _item_services;
import 'package:cross_website/components/home_page/list_logo.dart'
    as _list_logo;
import 'package:cross_website/components/header.dart' as _header;
import 'package:cross_website/constants/app_colors.dart' as _app_colors;
import 'package:cross_website/constants/theme_toogle.dart' as _theme_toogle;
import 'package:cross_website/pages/about_new.dart' as _about_new;
import 'package:cross_website/pages/home.dart' as _home;
import 'package:cross_website/pages/loading_screen.dart' as _loading_screen;
import 'package:cross_website/app.dart' as _app;

/// Default [ServerOptions] for use with your Jaspr project.
///
/// Use this to initialize Jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'main.server.options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultServerOptions,
///   );
///
///   runApp(...);
/// }
/// ```
ServerOptions get defaultServerOptions => ServerOptions(
  clientId: 'main.client.dart.js',
  clients: {_app.App: ClientTarget<_app.App>('app')},
  styles: () => [
    ..._app_colors.root,
    ..._app.AppState.styles,
    ..._header.HeaderState.styles,
    ..._button_primary_black.ButtonPrimaryBlack.styles,
    ..._custom_grid.CustomGrid.styles,
    ..._menu_button.MenuButton.styles,
    ..._title_icon_home.TitleIconHome.styles,
    ..._card_process_block.CardProcessBlockState.style,
    ..._case_studies_block.CaseStudiesBlock.style,
    ..._contact_us_block.ContactUsBlockState.style,
    ..._cta_block.CtaBlock.style,
    ..._footer_block.FooterBlock.style,
    ..._header_home_page.HeaderHomePage.styles,
    ..._item_services.ItemServices.styles,
    ..._list_logo.ListLogo.styles,
    ..._theme_toogle.ThemeToggleState.styles,
    ..._about_new.AboutNew.styles,
    ..._home.HomeState.styles,
    ..._loading_screen.LoadingScreen.styles,
  ],
);
