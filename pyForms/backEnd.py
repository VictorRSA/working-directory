# import pymysql.cursors
# from pymysql.cursors import error
import sqlite3
from sqlite3 import Error
import numpy as np
import pandas as pd


def createSqliteConnection(database):
    """ 
    Function that creates a connection to a sqlite3 database file.
@param database -- The path and name of the database file to connect to.
    """
    conn = None
    try:
        print("----------Attempting to connect to database using Sqlite3 version {version} ...".format(version = sqlite3.version))
        conn = sqlite3.connect(database)
        print("----------Successfully to connected to {database}".format(database = database))
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()

# def createSQLConnection(database):
#     """
#     Function that creates a connection to a MySQL database and
#     """

#     try:
#         print("-------Attempting to connect to a database server ------")
#         conn = pymysql.connect(
#             user="root",
#             password ="",
#             host='localhost',
#             database="")
#         print("**********Successfully connected to MySQL database server***********")
#     except error as e:
#         print(e)

#     finally:
#         conn.close()

def pandasToDatabase(csvDocument,database,tableName):
    conn = sqlite3.connect(database)
    dataframe = pd.read_csv(csvDocument)
    dataframe.to_sql (tableName,conn,if_exists =="append",index=False)
    

