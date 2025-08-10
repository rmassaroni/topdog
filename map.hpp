#pragma once

const int TILE_SIZE = 32;
const int MAP_WIDTH = 20;
const int MAP_HEIGHT = 15;

enum TileType {
    VOID = -1,     // filler
    GRASS = 0,
    ROAD = 1,
    SIDEWALK = 2,
    WALL = 3,
    DOOR = 4,
    WINDOW = 5,
    ROOF = 6
};

extern int mapData[MAP_HEIGHT][MAP_WIDTH]; // Declare map data

void generateMap(); // Optionally create a function to generate or load map

