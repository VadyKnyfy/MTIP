<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/content">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <title><xsl:value-of select="title"/></title>
                <style>
                    body {
                    display: block;
                    }
                    #window {
                    border: 3px solid #d3d3d3;
                    position: relative;
                    width: 100%;
                    height: 400px;
                    }
                    #box_anim {
                    width: 200px;
                    height: 40px;
                    background-color: lime;
                    position: absolute;
                    opacity: 0;
                    transition: background-color .5s ;
                    }
                    /* Додайте інші стилі за необхідності */
                </style>
            </head>
            <body>
                <div style="width: 100%; display: flex; justify-content: center;">
                    <button id="run"><xsl:value-of select="buttonText"/></button>
                </div>
                <div id="window">
                    <div id="box_anim" style="background-color: lime;"> <!-- Додайте стилі тут, якщо потрібно -->
                        <!-- Вміст, який можна стилізувати -->
                    </div>
                </div>
                <!-- Інші елементи, які потрібно відобразити -->
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="script.js"></script> <!-- Підключення вашого JavaScript -->
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
