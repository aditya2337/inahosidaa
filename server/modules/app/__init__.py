''' flask app '''
import os
import json
import datetime
import pyrebase
from flask import Flask

config = {
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

# create a flask object
app = Flask(__name__)
