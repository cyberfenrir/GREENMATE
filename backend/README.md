# GreenMate backend 

## Setup 

1. Make sure `python 3.x` and `pip` are installed. 
2. Install `virtualenv` package

```bash
pip install virtualenv
```

3. Inside `GREENMATE/backend` directory, create a virtual environment `denv`

```bash
virtualenv denv
```
3. Activate the created virtual environment
>**Warning:**
> Follow this [link](https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system) prior to running below command on windows 10

```bash
.\denv\Scripts\activate
```
4. Install required dependencies in activated env

```bash
pip install django djangorestframework pillow django-cors-headers
```
5. To run the dev server, run: 
```bash
python manage.py runserver
```
>**Note:** 
>Might have to run `python manage.py migrate` and restart server. Check CLI output for instructions.

## Additional Info: 

To create a superuser/admin, run:
```bash
python manage.py createsuperuser
```
access admin dashboard at `localhost:8000/admin`

To create a django project (not necessary for this project, already done)
```bash
django-admin startproject backend ##(backend=name of project)
```
