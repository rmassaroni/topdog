cmake_minimum_required(VERSION 3.10)
project(SimpleRPG)

set(CMAKE_CXX_STANDARD 17)

find_package(SFML 2.5 REQUIRED graphics window system)

add_executable(SimpleRPG main.cpp)
target_link_libraries(SimpleRPG sfml-graphics sfml-window sfml-system)

