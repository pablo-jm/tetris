const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');
const pauseBtn = document.getElementById('pauseButton');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');

const ROWS = 20, COLS = 10, SIZE = 20;
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

let isPaused = false;
let gameInterval;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
highScoreElement.textContent = highScore;

const SHAPES = 