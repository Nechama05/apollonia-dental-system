FROM node:18-alpine

WORKDIR /app

# מעתיקים את כל הקבצים
COPY . .

# עוקפים את בדיקת ה-SSL הקפדנית (פותר את בעיית ה-Leaf Signature)
RUN npm config set strict-ssl false

# מתקינים את הספריות
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]