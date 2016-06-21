#!/usr/bin/env python
# -*- coding: utf-8 -*-

import web
import sys
import os
import re
import string
import time
import config.Url_module

urls = config.Url_module.urls
app = web.application(urls, globals())

if __name__ == "__main__":
    app.run()

