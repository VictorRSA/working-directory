from flask import Flask,jsonify ,render_template
from pyForms.AsyncPromises.backEnd import createSqliteConnection ,pandasToDatabase
import sqlite3
import datetime

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route("/api/v1/jobs/datascience/all",methods=["GET", "POST"])
def apiViewAll():
    """ we are creating a route for this view """
    connection = sqlite3.connect("data/datasciencejobs_database.db")
    connection.row_factory = dictFactory
    cur = connection.cursor() 
    all_books = cur.execute("SELECT * FROM tblJobs;").fetchall()
    return jsonify(all_books)
"""
with this functionality enabled end-users are now able to query all of the data within our database
this is not problematic at the momement as the database grows and lets say contains 1000 entries,
however this will be problematic as the database grows and end users are required
to wait long periods of time for the entire database to reach them
.That said part of the effiecient Design of Any REST API  will allow users to querry data using 
the first three parameters. A function must be developed which allows for the data 
to be filtered using multiple endpoints by specifying either:
 (a)"id",
 (b)"dateTIme"
 or
 (c) country
 please note that an error of 404 page not found is issued if none of the entries are specified

"""
@app.route("/api/v1/jobs/datascience",methods = ["GET", "POST"])

def apiViewByFilter():
    """
    function that allwos the use4s to filter the result in the API
    based on the specified 
    """
    query_parameters  = request.args

    id =query_parameters.get("id")
    dateTime = query_parameters.get("dateTime")
    cleanContent = query_parameters.get("cleanContent")
    country = query_parameters.get("country")
    query = "SELECT * FROM tblJobs WHERE"
    to_filter =[]
    if id:
        query+ = "id=? AND"
        to_filter.append(id)

    if dateTime:
        query + = 'dateTime =? AND'
