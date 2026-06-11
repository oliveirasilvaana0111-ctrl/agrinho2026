<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Agrinho - Agro Forte, Futuro Sustentável</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="quiz-container">
        <div id="start-screen" class="screen">
            <h1>Quiz Agrinho 2026</h1>
            <h2>Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente</h2>
            <p>Teste seus conhecimentos sobre as práticas agrícolas modernas que unem alta produtividade e preservação ambiental!</p>
            <button id="start-btn" class="btn">Iniciar Jogo</button>
        </div>

        <div id="quiz-screen" class="screen hide">
            <div class="quiz-header">
                <span id="progress">Pergunta 1 de 5</span>
                <div id="timer">Tempo: <span id="time-left">20</span>s</div>
            </div>
            
            <div id="question-container">
                <p id="question-text">Texto da Pergunta</p>
                <div id="answer-buttons" class="btn-grid">
                    </div>
            </div>

            <div class="quiz-footer">
                <button id="next-btn" class="btn hide">Próxima Pergunta</button>
            </div>
        </div>

        <div id="result-screen" class="screen hide">
            <h2>Fim de Jogo!</h2>
            <p id="score-text">Você acertou X de Y perguntas.</p>
            <div id="feedback-message"></div>
            <button id="restart-btn" class="btn">Jogar Novamente</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
