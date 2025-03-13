DATABASES = {
    "default": {
        "ENGINE": "djongo",
        "NAME": "pizza_db",  # Your MongoDB database name
        "CLIENT": {
            "host": "mongodb://localhost:27017/",  # MongoDB connection URI
            "serverSelectionTimeoutMS": 5000,  # Timeout to avoid hanging connections
        }
    }
}
