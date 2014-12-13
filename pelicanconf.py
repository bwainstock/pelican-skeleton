#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import datetime

EPOCH = datetime.datetime.utcfromtimestamp(0)
AUTHOR = u'Barry Wainstock'
SITENAME = u'Barry Hikes The PCT'
#SITEURL = ''
SITEURL = 'http://tigren.duckdns.org/pel-skel'
THEME = "./skel-theme"
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
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('twitter', 'barrywainstock'),
          ('instagram', 'bwainstock'),
          ('facebook', 'barrywainstock'),
          ('github', 'bwainstock'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

MENUITEMS =(('Gear', 'gear.html'),
         ('Map', 'map.html'),
         ('About', 'about.html'),)
         
DISPLAY_CATEGORIES_ON_MENU = False
YEAR_ARCHIVE_SAVE_AS = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%b}/index.html'

DEFAULT_DATE_FORMAT = '%a %B %d, %Y'
GOOGLE_ANALYTICS = 'UA-56109557-2'
