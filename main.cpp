#include <SFML/Graphics.hpp>
#include <vector>
#include "map.hpp"

const int WINDOW_WIDTH = TILE_SIZE * MAP_WIDTH;
const int WINDOW_HEIGHT = TILE_SIZE * MAP_HEIGHT;


int main() {
    // sf::RenderWindow window(sf::VideoMode(WINDOW_WIDTH, WINDOW_HEIGHT), "Simple RPG"); //limited screen
    sf::RenderWindow window(sf::VideoMode::getDesktopMode(), "Simple RPG", sf::Style::Fullscreen); //full screen

    // Define simple textures with colors
    sf::RectangleShape wallTile(sf::Vector2f(TILE_SIZE, TILE_SIZE));
    wallTile.setFillColor(sf::Color::Blue);

    sf::RectangleShape floorTile(sf::Vector2f(TILE_SIZE, TILE_SIZE));
    floorTile.setFillColor(sf::Color(200, 200, 200));

    sf::RectangleShape voidTile(sf::Vector2f(TILE_SIZE, TILE_SIZE));
    voidTile.setFillColor(sf::Color(30, 30, 30)); // dark gray

    // Player setup
    sf::RectangleShape player(sf::Vector2f(TILE_SIZE, TILE_SIZE));
    player.setFillColor(sf::Color::Red);
    sf::Vector2i playerPos(1, 1); // grid position

    window.setFramerateLimit(60);

    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed)
                window.close();
            if (event.type == sf::Event::KeyPressed && event.key.code == sf::Keyboard::Escape)
                window.close();
        }

        // Movement
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::W) && mapData[playerPos.y - 1][playerPos.x] == 0)
            playerPos.y--;
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::S) && mapData[playerPos.y + 1][playerPos.x] == 0)
            playerPos.y++;
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::A) && mapData[playerPos.y][playerPos.x - 1] == 0)
            playerPos.x--;
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::D) && mapData[playerPos.y][playerPos.x + 1] == 0)
            playerPos.x++;

        // Calculate how many tiles fit on screen
        int screenTilesX = window.getSize().x / TILE_SIZE;
        int screenTilesY = window.getSize().y / TILE_SIZE;

        int offsetX = (window.getSize().x - (MAP_WIDTH * TILE_SIZE)) / 2;
        int offsetY = (window.getSize().y - (MAP_HEIGHT * TILE_SIZE)) / 2;

        // Render
        window.clear();

        // // Draw the map
        for (int y = 0; y < screenTilesY; y++) {
            for (int x = 0; x < screenTilesX; x++) {
                int tileX = x - (screenTilesX - MAP_WIDTH) / 2;
                int tileY = y - (screenTilesY - MAP_HEIGHT) / 2;

                sf::Vector2f screenPos(x * TILE_SIZE, y * TILE_SIZE);

                if (tileY >= 0 && tileY < MAP_HEIGHT && tileX >= 0 && tileX < MAP_WIDTH) {
                    int tileType = mapData[tileY][tileX];
                    if (tileType == 1) {
                        wallTile.setPosition(screenPos);
                        window.draw(wallTile);
                    } else {
                        floorTile.setPosition(screenPos);
                        window.draw(floorTile);
                    }
                } else {
                    voidTile.setPosition(screenPos);
                    window.draw(voidTile);
                }
            }
        }

        player.setPosition(
            offsetX + playerPos.x * TILE_SIZE,
            offsetY + playerPos.y * TILE_SIZE
        );

        // Draw the player
        window.draw(player);

        window.display();
        sf::sleep(sf::milliseconds(100)); // crude movement limiter
    }

    return 0;
}
