#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os,sys
import web
from sys_config import db 
from decorators import login_required 
render = web.template.render('templates/', cache=False)
class Index:
    @login_required
    def GET(self):
        try: 
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.stu_index(s)

        except Exception ,e:
            #跳转报错页面
            print e
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.error()
    def POST(self):
        try:
            web_info = web.input(name=None)
            name = web_info.get('name')
            res =  db.query(''' select * from t_user where name ='%s' '''%name)[0]
            print res         
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.login(s)

        except Exception ,e:
            #跳转报错页面
            print e
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.error()
