## DevConnector

DevConnector is a Social Network For Developers. In this Project I have used Django and Django-Rest-Framework for Backend and React For Frontend.

### Demo of this site available here [AWS Lambda deployment](https://p2ooapkt3h.execute-api.eu-west-2.amazonaws.com/dev/api/users)

## Backend( Django )

### Backend is deployed at AWS lambda at
```
  https://p2ooapkt3h.execute-api.eu-west-2.amazonaws.com/dev/api/users
```

#### Local Installing


open terminal and type

```
git clone https://github.com/Hasn-Khan/DevConnector-Django.git
```

## Backend( Django )
Navigate to directory backend ```cd backend```
RUN ``` docker build .```
RUN ``` docker compose up ```

Accessible at http://localhost:8000/api/profiles/

## Frontend( React )
Navigate to directory backend ```cd frontend```
RUN ``` docker image build -t react-frontend:latest .```
RUN ``` docker run -dp 4000:3000 --name react-example-container react-frontend:latest ```

localhost:3000

#### Requirements

`To use Github api put your credentials in settings.py`

```
GIT_CLIENT_ID = 'your github client id'
GIT_CLIENT_SECRET = 'your github client secret'
```

To migrate the database open terminal in project directory and type

```
python manage.py makemigrations devconnector
python manage.py migrate
```

#### Author

<blockquote>
Mahmudul alam<br>
Email: expelmahmud@gmail.com
</blockquote>

========Thank You !!!=========
