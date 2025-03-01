from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Allow CORS for all domains - This is important don't delete LOL
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins.
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class House(BaseModel):
    id: int
    image_url: str
    location: str
    bedrooms: int
    bathrooms: int
    building_type: str
    features: str

class Search(BaseModel):
    neighbourhood: str
    bedrooms: int
    bathrooms: int
    building_type: str
    features: str

# Sample house data
houses = [
    House(id=1, image_url="https://via.placeholder.com/150", location="Neighbourhood 1", bedrooms=3, bathrooms=2, building_type="Apartment", features="Pool, Garage"),
    House(id=2, image_url="https://via.placeholder.com/150", location="Neighbourhood 2", bedrooms=4, bathrooms=3, building_type="Detached", features="Garden, Garage"),
    House(id=3, image_url="https://via.placeholder.com/150", location="Neighbourhood 3", bedrooms=2, bathrooms=1, building_type="Townhouse", features="Balcony"),
    House(id=4, image_url="https://via.placeholder.com/150", location="Neighbourhood 4", bedrooms=5, bathrooms=4, building_type="Villa", features="Swimming Pool, Fireplace"),
]

@app.post("/submit-search")
async def submit_search(search_data: Search):
    return {"message": "Form submitted successfully", "data": search_data.model_dump()}

@app.get("/houses")
async def get_houses():
    return houses
