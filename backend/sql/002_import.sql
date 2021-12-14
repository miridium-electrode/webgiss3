COPY webgis_uni (id, name, address, latitude, longitude) 
FROM '/geodata/Universitas.csv' DELIMITER ',' CSV HEADER;