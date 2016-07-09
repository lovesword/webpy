#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os,sys
import web
from sys_config import db 
from decorators import login_required
render = web.template.render('templates/', cache=False)

class Logout:
    @login_required
    def GET(self):
        try:
            web.setcookie('username','')
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            raise web.seeother('/login')

        except Exception ,e:
            #跳转报错页面
            print e
            info = e
            s = web.Storage(locals())
            web.header("Content-Type","text/html;charset=utf-8")
            return render.error(s)
