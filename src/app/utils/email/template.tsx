import { FormRequestInterface } from "@/app/api/contact/route";

export const template = (body: FormRequestInterface) => {
    const { name, lastName, email, phone, city, message } = body.formData;

    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>NUEVO MENSAJE</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.5;
            }

            .header {
                text-align: left;
                padding-bottom: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .content {
                padding: 20px 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
    
            .personal-info {
                margin-bottom: 15px;
                color: #555;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #555;
                font-weight: 500;
                font-size: 16px;
            }
            
            .link {
                color: #007bff;
                text-decoration: none;
            }

            .footer {
                margin-bottom: 15px;
                text-align: left;
                padding-top: 20px;
            }

            .footer p {
                list-style: none;
                margin-bottom: 5px;
                color: #777;
                text-align:left;
                font-size: 16px;
            }

        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>NODO PAID MEDIA</h1>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h2>Datos personales:</h2>
                    <ul>
                        <li><strong>Nombre: </strong>${name}</li>
                        <li><strong>Apellido: </strong>${lastName}</li>
                        <li><strong>Email: </strong><a href="mailto:${email}" class="link">${email}</a></li>
                        <li><strong>Teléfono: </strong>${phone}</li>
                        ${city ? `<li><strong>Ciudad: </strong>${city}</li>` : ""}
                    </ul>
                </div>
            </div>
            <div class="footer">
                ${message ? `<p><strong>Mensaje: </strong>${message}</p>` : ""}
            </div>
        </div>
    </body>
    </html>
    `;
};
