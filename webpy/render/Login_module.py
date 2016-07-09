#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os,sys
import web
from sys_config import db 
from decorators import login_required
render = web.template.render('templates/', cache=False)

class Login:
    def GET(self):
        try:
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.login(s)

        except Exception ,e:
            #跳转报错页面
            print e
            info = e
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.error(s)
    def POST(self):
        try:
            web_info = web.input(NAME=None,PASSWORD = None,user_type = None)
            NAME = web_info.get('NAME')
            PASSWORD = web_info.get('PASSWORD')
            user_type = web_info.get('user_type')
            if user_type =='1':
                res =  db.query(''' select * from t_stu where NAME ='%s' and PASSWORD='%s' '''%(NAME,PASSWORD))
                if res:
                    web.setcookie('username',NAME)
                    raise web.seeother('/stu_index')
                info = '账号或者密码不正确'     
                s = web.Storage(locals())
                web.header("Content-Type","text/html;charset=utf-8")
                return render.login(s) 
            else:
                res =  db.query(''' select * from t_admin where NAME ='%s' and PASSWORD='%s' '''%(NAME,PASSWORD))
                if res:
                    web.setcookie('username',NAME)
                    raise web.seeother('/admin_index')
                info = '账号或者密码不正确'     
                s = web.Storage(locals())
                web.header("Content-Type","text/html;charset=utf-8")
                return render.login(s) 

        except Exception ,e:
            #跳转报错页面
            print e
            info = e
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.error(s)
