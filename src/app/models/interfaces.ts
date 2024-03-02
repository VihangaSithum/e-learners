export interface Learners {
    "id": number,
    "service_type": string,
    "vehicle_category": string,
    "price_range": string,
    "organization_name": string,
    "about_organization": string,
    "about_package": string,
    "address": string,
    "district": String,
    "email": string,
    "brc_no": string,
    "longitude": string,
    "latitude": string,
    "mobile_no": string,
    "logo": string,
    "is_active": number,
    "rating": number,
    "commission_type": string,
    "commission": number,
    "get_new_license": number,
    "licence_renewal": number,
    "upgrade_to_heavy_vehicle": number,
    "resit_for_exam": number,
    "resit_for_trial": number,
    "personal_trainer": number,
    "deleted_at": null,
    "created_at": string,
    "updated_at": string,
    "package": {
        "id": number,
        "organization_id": number,
        "bike": number,
        "car": number,
        "tuk": number,
        "bike_car": number,
        "bike_tuk": number,
        "car_tuk": number,
        "bike_car_tuk": number,
        "heavy_vehicle": number,
        "resit_for_exam": number,
        "resit_for_trial": number,
        "deleted_at": null,
        "created_at": string,
        "updated_at": string
    }
}

export interface Districts {
    "location": string
}