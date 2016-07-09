#!/usr/bin/env python
# -*- coding: utf-8 -*-

import web



web.config.debug = False

folder = 'templates.'
render = 'render.'
view = 'view.'

urls = (
# '/',                render + 'Index_module.Index',
'/login',           render + 'Login_module.Login',
'/admin_index',           render + 'Index_admin_module.Index',
'/stu_index',           render + 'Index_stu_module.Index',
'/logout',           render + 'Logout_module.Logout',
# '/register(.*)',           render + 'Register_module.Register',
# '/begin_muji',           render + 'Begin_muji_module.Begin_muji',
# '/sign_detail',           render + 'Sign_detail_module.Sign_detail',
# '/taolun_sign',           render + 'Taolun_sign_module.Taolun_sign',
# '/pinjia_user',           render + 'Pinjia_user_module.Pinjia_user',
# '/canjia_muji',           render + 'Canjia_muji_module.Canjia_muji',
# '/add_shangjia',           render + 'Add_shangjia_module.Add_shangjia',
# '/add_cankao',           render + 'Add_cankao_module.Add_cankao',
# '/add_taolun',           render + 'Add_taolun_module.Add_taolun',
# '/gouwuche',           render + 'Gouwuche_module.Gouwuche',
# '/ailpay',           render + 'Ailpay_module.Ailpay',
# '/pay_liushui',           render + 'Pay_liushui_module.Pay_liushui',
# '/email_send',           render + 'Email_send_module.Email_send',
# '/search_manager',           render + 'Search_manager_module.Search_manager',
# '/image_page',           render + 'Image_page_module.Image_page',
# '/sq_shangjia',           render + 'Sq_shangjia_module.Sq_shangjia',

# '/msg_manager',       render + 'Msg_manager_module.Msg_manager',

# '/test',            render + 'Test_module.Test',
# '/kd',            render + 'kd.kd',
# '/apk_update(.*)',            render + 'Apk_update_module.Apk_update',
# '/down/(.*)',   render+ 'down.down',
# '/ajax_manager',render+ 'Ajax_manager_module.Ajax_manager',
# '/mobile',            render+'mobile.' + 'Mobile_module.Mobile',



##'/outexcel/(.*)',   view + 'common.outexcel',
##'/css/(.*)',        view + 'common.css',
##'/dtree/(.*)',      view + 'common.dtree',
##'/js/(.*)',         view + 'common.js',
##'/images/(.*)',     view + 'common.img',
##'/flash/(.*)',      view + 'common.flash',
##'/img/(.*)',        view + 'common.img',
##'/favicon.ico',     view + 'common.favicon', 
)
