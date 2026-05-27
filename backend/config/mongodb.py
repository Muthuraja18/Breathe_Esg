from pymongo import MongoClient

MONGO_URI = "mongodb+srv://muthurajlingam788:Muthu%4002@cluster0.vgobnxf.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(MONGO_URI)

db = client["breathe_esg"]