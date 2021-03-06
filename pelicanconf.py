#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import datetime

EPOCH = datetime.datetime.utcfromtimestamp(0)
AUTHOR = u'Barry Wainstock'
SITENAME = u'Barry Hikes The PCT'
TAGLINE = u'This is a journey from Mexico to Canada on my feet.'
SITEURL = 'http://localhost:8000'
#SITEURL = 'http://tigren.duckdns.org:8001'
#THEME = './pelican-themes/pelican-svbhack'
THEME = './pelican-themes/pelicanium'
PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
#LINKS = (('Map', '#'),)

# Social widget
SOCIAL = (('twitter', 'https://twitter.com/barrywainstock'),
          ('instagram', 'https://instagram.com/bwainstock'),
          ('facebook', 'https://www.facebook.com/barrywainstock'),)
#          ('github', 'https://github.com/bwainstock/'),)

#DEFAULT_PAGINATION = 5
#PAGINATED_DIRECT_TEMPLATES = ['index', 'archives']

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#MENUITEMS =(('Home', SITEURL),)
#         ('Map', 'map.html'),
#         ('About', 'about.html'),)
         
DISPLAY_CATEGORIES_ON_MENU = False
YEAR_ARCHIVE_SAVE_AS = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%b}/index.html'

DEFAULT_DATE_FORMAT = '%a %B %d, %Y'
GOOGLE_ANALYTICS = 'UA-56109557-2'

PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['neighbors']

HEADER_URL = SITEURL + '/images/header_logo.jpg'
USER_LOGO_URL = SITEURL + '/images/logo.jpg'
COVER_IMG = '/images/cover.jpg'
DISQUS_SITENAME = 'jbredbook'

INSTAGRAM_ID = 361018940
INSTAGRAM_TOKEN = '361018940.467ede5.ab481cfcaafd4454a1ea333429e3d3c7'
