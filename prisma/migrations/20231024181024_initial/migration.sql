-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "img_url" VARCHAR(255),

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "website" VARCHAR(255),

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flights" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "company_id" INTEGER,
    "destination_id" INTEGER,
    "departure_id" INTEGER,

    CONSTRAINT "flights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "city" INTEGER,
    "img_url" VARCHAR(255),

    CONSTRAINT "hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "room_type" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "capacity" INTEGER NOT NULL,
    "price_per_night" DECIMAL(10,2) NOT NULL,
    "img_url" VARCHAR(255),
    "hotel_id" INTEGER,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_departure_id_fkey" FOREIGN KEY ("departure_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "flights" ADD CONSTRAINT "flights_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hotels" ADD CONSTRAINT "hotels_city_fkey" FOREIGN KEY ("city") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
