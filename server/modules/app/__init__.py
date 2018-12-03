''' flask app '''
import os
import json
import datetime
import pyrebase
from flask import Flask
from flask_cors import CORS

config = {
   "apiKey": "AIzaSyAOaXCGlG-Ro9SiuRtsHX_EUcqsFMHqb4A",
    "authDomain": "inahosidaa.firebaseapp.com",
    "databaseURL": "https://inahosidaa.firebaseio.com",
    "projectId": "inahosidaa",
    "storageBucket": "inahosidaa.appspot.com",
    "messagingSenderId": "546409619224"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

# create a flask object
app = Flask(__name__)
CORS(app)

