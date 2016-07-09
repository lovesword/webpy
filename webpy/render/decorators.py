#!/usr/bin/env python
# -*- coding: utf-8 -*-
import web
from functools import wraps 
def login_required(func):
    @wraps(func)
    def check_session(*args, **kwargs):
        if web.cookies().get('username'):
            return  func(*args, **kwargs)
        else:
        	raise web.seeother('/login')
    return check_session