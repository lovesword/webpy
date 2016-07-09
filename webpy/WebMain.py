#!/usr/bin/env python
# -*- coding: utf-8 -*-

import web
import sys
import os
import re
import string
import time
import config.Url_module

web.config.debug = True
urls = config.Url_module.urls
app = web.application(urls, globals())

if __name__ == "__main__":
	#app.debug = True
    app.run()

