// docs/swaggerDocs.js

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user and return a JWT token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       '401':
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - apiKeyAuth: []
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * tags:
 *   name: Uploads
 *   description: File upload and download management
 */

/**
 * @swagger
 * /uploads:
 *   post:
 *     summary: Upload a new file
 *     tags: [Uploads]
 *     security:
 *       - apiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file_name:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '201':
 *         description: File uploaded successfully
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /uploads:
 *   get:
 *     summary: Get all uploaded files
 *     tags: [Uploads]
 *     security:
 *       - apiKeyAuth: []
 *     responses:
 *       '200':
 *         description: A list of uploaded files
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Upload'
 *       '401':
 *         description: Unauthorized
 */

/**
 * @swagger
 * /uploads/{id}:
 *   get:
 *     summary: Get file upload details by ID
 *     tags: [Uploads]
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: File upload details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Upload'
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: File not found
 */

/**
 * @swagger
 * /uploads/{id}:
 *   put:
 *     summary: Update file upload details by ID
 *     tags: [Uploads]
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: File upload updated successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: File not found
 */

/**
 * @swagger
 * /uploads/{id}:
 *   delete:
 *     summary: Delete a file upload by ID
 *     tags: [Uploads]
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       '204':
 *         description: File deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: File not found
 */

/**
 * @swagger
 * /download/{file_name}:
 *   get:
 *     summary: Download a file by name
 *     tags: [Uploads]
 *     parameters:
 *       - in: path
 *         name: file_name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: File downloaded successfully
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       '404':
 *         description: File not found
 */

/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: API for managing chat messages
 */

/**
 * @swagger
 * /chats:
 *   post:
 *     summary: Create a new chat message
 *     tags: [Chats]
 *     security:
 *       - apiKeyAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello, how are you?"
 *               username:
 *                 type: string
 *                 example: "johndoe"
 *               userId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       '201':
 *         description: Chat message created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chat'
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /chats:
 *   get:
 *     summary: Get all chat messages
 *     tags: [Chats]
 *     security:
 *       - apiKeyAuth: []
 *     responses:
 *       '200':
 *         description: A list of chat messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Chat'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         fullname:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *  
 *     Upload:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         file_name:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     Chat:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         message:
 *           type: string
 *         username:
 *           type: string
 *         userId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *   securitySchemes:
 *     apiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 */
