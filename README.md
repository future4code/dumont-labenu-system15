# LabenuSystem - Grupo 15

- Bruno Mugnol
- Diana Monteiro
- Nicole Zolnier

## **POST** Create Student

**Path:** `/student`

**Body:**

```json
{
    "studentName": "Billi",
    "studentEmail": "bi@li.com",
    "studentBirthDate": "10/10/2000"
}
```

## **POST** Create Teacher

**Path:** `/teacher`

**Body:**

```json
{
    "teacherName": "Darvas",
    "teacherEmail": "prevent@default.com",
    "birthDate": "12/02/2021"
}
```

## **POST** Create Mission

**Path:** `/mission`

**Body:**

```json
{
    "missionName": "Porto Velho",
    "startDate": "20/04/2021",
    "endDate": "24/10/2021"
}
```
opcional> "module": 1

## **PUT** Add Student to Class
**Path:** `/student/:id`

**Path Param**: id do estudante

**Body:**

```json
{
    "missionID": 1
}
```

## **PUT** Add Teacher to Class
**Path:** `/teacher/:id`

**Path Param**: id do docente

**Body:**

```json
{
   "missionID": 3
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

## **GET** Students From Hobby
**Path:** `/students/hobby/:id`

**Path Param**: id do hobby

**Body de Resposta:**

```json
{
    "hobby": "Baixar filme pirata",
    "students": [
        {
            "student_id": 1,
            "student_name": "Maricota"
        },
        {
            "student_id": 3,
            "student_name": "Didi"
        }
    ]
}
```

## **GET** Students From Mission
**Path:** `/mission/:id/students`

**Path Param**: id da missão

**Body de Resposta:**

```json
{
    "missionName": "Manaus",
    "students": [
        {
            "student_id": 1,
            "student_name": "Maricota"
        }
    ]
}
```

## **GET** Teachers from Mission
**Path:** `/students/hobby/:id`

**Path Param**: id da missão

**Body de Resposta:**

```json
{
    "missionName": "Teresina",
    "teachers": [
        {
            "teacher_id": 4,
            "teacher_name": "Teresinha"
        }
    ]
}
```

