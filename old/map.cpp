#include "map.hpp"

// Define the map data
int mapData[MAP_HEIGHT][MAP_WIDTH] = {
    {1,1,1,1,1,1,1,1,1,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,0,0,0,0,0,0,0,0,1},
    {1,1,1,1,1,1,1,1,1,1},
};

// int mapData[MAP_HEIGHT][MAP_WIDTH];

void generateMap() {
    // Fill with grass
    for (int y = 0; y < MAP_HEIGHT; y++) {
        for (int x = 0; x < MAP_WIDTH; x++) {
            mapData[y][x] = GRASS;
        }
    }

    // Street layout
    for (int y = 5; y <= 6; y++) {
        for (int x = 0; x < MAP_WIDTH; x++) {
            mapData[y][x] = ROAD;
        }
    }

    // Sidewalk
    for (int x = 0; x < MAP_WIDTH; x++) {
        mapData[4][x] = SIDEWALK;
    }

    // Building row 1 (wall with windows and doors)
    for (int x = 0; x < MAP_WIDTH; x++) {
        if (x % 5 == 1) mapData[3][x] = DOOR;
        else if (x % 2 == 0) mapData[3][x] = WINDOW;
        else mapData[3][x] = WALL;
    }

    // Building row 2 (walls)
    for (int x = 0; x < MAP_WIDTH; x++) {
        if (x % 3 == 0) mapData[2][x] = WINDOW;
        else mapData[2][x] = WALL;
    }

    // Rooftop
    for (int x = 0; x < MAP_WIDTH; x++) {
        mapData[1][x] = ROOF;
    }
}

