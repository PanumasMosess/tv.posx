<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');
$routes->get('/', 'DashBoardController::index');
$routes->get('/upload', 'UploadController::index');
$routes->post('/upload_customer', 'UploadController::inert_message');