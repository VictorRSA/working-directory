from pyForms.AsyncPromises.backEnd import createSqliteConnection ,pandasToDatabase
import __backend
if __name__ == '__main__':
    createSqliteConnection("data/datasciencejobs_database.db")
    pandasToDatabase("data/datasciencejobs_database.csv","data/datasciencejobs_database.db","tblJobs",data/datasciencejobs_database.db)

