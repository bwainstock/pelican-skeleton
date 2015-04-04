#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

#SITEURL = '/pelican-skeleton/'
SITEURL = 'http://www.barryhikesthepct.com'
USER_LOGO_URL = SITEURL + '/images/logo.jpg'
COVER_IMG = 'images/cover.jpg'
HEADER_URL = SITEURL + 'images/header_logo.jpg'
RELATIVE_URLS = False

#MENUITEMS =(('Home', SITEURL),)

#FEED_ALL_ATOM = 'feeds/all.atom.xml'
FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

DISQUS_SITENAME = "barryhikesthepct"
GOOGLE_ANALYTICS = "UA-56109557-2"

SOCIAL = (('Twitter', 'https://twitter.com/barrywainstock'),
          ('Instagram', 'https://instagram.com/bwainstock'),
          ('Facebook', 'https://www.facebook.com/barrywainstock'),
          ('RSS', SITEURL + '/' + FEED_ALL_RSS,),)

STATIC_PATHS = ['images', 'extra/CNAME']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},}
