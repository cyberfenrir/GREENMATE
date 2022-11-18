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
```bash
.\denv\Scripts\activate
```
4. Install `django` and `djangorestframework` in the activated env

```bash
pip install django djangorestframework
```
5. To run the dev server, run: 
```bash
python manage.py runserver
```
>Note: Might have to run `python manage.py migrate` and restart server. Check CLI output for instructions.
