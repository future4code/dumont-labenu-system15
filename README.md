# LabenuSystem:

## **POST** Create Student

**Path:** `/student`

**Body:**

```json
{
    "student_name": "Billi",
    "student_email": "bi@li.com",
    "student_birth_date": "10/10/2000"
}
```

## **POST** Create Teacher

**Path:** `/teacher`

**Body:**

```json
{
    bruno vc que me diga
}
```

## **POST** Create Mission

**Path:** `/mission`

**Body:**

```json
{
    "name": "Porto Velho",
    "startDate": "08/04/2021",
    "endDate": "10/10/2021"
}
```
opcional> "module": 1

## **PUT** Add Student to Class
**Path:** `/student/:id`

**Path Param**: id do estudante

**Body:**

```json
{
    didi vc que me diga
}
```

## **PUT** Add Teacher to Class
**Path:** `/teacher/:id`

**Path Param**: id do docente

**Body:**

```json
{
    bruno vc que me diga
}
```

## **GET** Student Age By Id
**Path:** `/student/:id`

**Path Param**: id do estudante

**Body de Resposta:**

```json
{
    "studentName": "Didi",
    "age": "21 years"
}
```
