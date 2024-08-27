<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="EMPLOYEES">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <title>Список працівників</title>
                <style>
                    table {
                    width: 100%;
                    border-collapse: collapse;
                    }
                    th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                    }
                    th {
                    background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Список працівників</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Прізвище</th>
                            <th>Ім'я</th>
                            <th>По батькові</th>
                            <th>Адреса</th>
                            <th>Телефон</th>
                            <th>Посада</th>
                            <th>Відділ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:apply-templates select="EMPLOYEE">
                            <xsl:sort select="LAST_NAME"/>
                        </xsl:apply-templates>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="EMPLOYEE">
        <tr>
            <td><xsl:value-of select="LAST_NAME"/></td>
            <td><xsl:value-of select="FIRST_NAME"/></td>
            <td><xsl:value-of select="MIDDLE_NAME"/></td>
            <td>
                <xsl:value-of select="concat(ADDRESS/REGION, ', ', ADDRESS/CITY, ', ', ADDRESS/STREET, ' ', ADDRESS/HOUSE)"/>
            </td>
            <td><xsl:value-of select="concat('Домашній: ', PHONE/HOME, '; ')"/>
                <xsl:text>Мобільний: </xsl:text>
                <xsl:for-each select="PHONE/MOBILE">
                    <xsl:if test="position() &gt; 1">
                        <xsl:text>; </xsl:text>
                    </xsl:if>
                    <xsl:value-of select="."/>
                </xsl:for-each>
                <xsl:text>;</xsl:text>
            </td>
            <td><xsl:value-of select="POSITION"/></td>
            <td><xsl:value-of select="DEPARTMENT"/></td>
        </tr>
    </xsl:template>

</xsl:stylesheet>
