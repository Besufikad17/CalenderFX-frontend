# CalenderFx

## Introduction

CalenderFx is open-source api built for the purpose of integrating Ethiopian calender system based on npm package called [abushakir-js]('https://www.npmjs.com/package/abushakir') 

[Backend](https://github.com/Besufikad17/CalendarFx-backend) 
[Docs](https://github.com/Besufikad17/CalenderFx-docs)

<br>

### AbushakirJs (ባሕረ ሃሳብ)

"Bahire Hasab /'bəhrɛ həsəb'/ " simply means "An age with a descriptive and chronological number". In some books it can also be found as "Hasabe Bahir", in a sense giving time an analogy, resembling a sea.

The words Bahire Hasab originate from the ancient language of Ge'ez, ( Arabic: Abu Shakir) is a time-tracking method, devised by the 12th pope of Alexandria, Pope St. Dimitri.

This package allows developers to implement Ethiopian Calendar and Datetime System in their application(s)`.

This package is implemented using the UNIX EPOCH which means it's not a conversion of any other calendar system into Ethiopian, for instance, Gregorian Calendar.

Unix Epoch is measured using milliseconds since 01 Jan, 1970 UTC. In UNIX EPOCH leap seconds are ignored.

<br>

## Client Implementations

JSON:API has a great advantage in that since its standardised, API-agnostic tools can be made to abstract away the semantics of consuming and working with the data. It is recommended that you use a JSON:API client to implement the Kitsu API for this reason.

Many implementations in over 13 languages can be found on the [JSON:API website](http://jsonapi.org/implementations/#client-libraries).<br><br>


### HTTP Methods


| Method | Description                  |
| ------ | ---------------------------- |
| GET    | Fetch - retrieve resources   |
| POST   | Create - create new resource |


### End-points

#### <b>User</b>

This collection of end-points consists of requests to post, get and update user data.


| End-point | Method | Description                     | Body                                           |
| --------- | ------ | ------------------------------- | ---------------------------------------------- |
| /signup   | POST   | signing new user         | ``` { username, email, password, purpose } ``` |
| /login    | POST   | logging to existing account     | ``` { username, password } ```                 |
| /update   | PUT    | updating username and password) | ``` { newUsername, email, newPassword } ```    |

 <u>Response</u>
 
| Code | Message |
| ----- | ----- | 
| 200 | ``` { token, user : { username, email, password, api_key, role } } ``` |
| 400 | ``` { msg: "Please enter all fields" } ``` ``` { msg: "user exists" } ``` ``` { msg: "user doesn't exist" } ```|


#### <b>Calenderfx-API</b>

This collection of end-points consists of requests to use basic functions of CalendarFx.


| End-point | Method | Description                     | Body | Params |
| --------- | ------ | ------------------------------- | ---- | ------ |
| /api/toEC   | POST   | converting GC to EC |    ```{ year, month, day }```     | api_key |
| /api/toGeez    | GET | converting arabic number to geez |  ```{ number }``` | api_key |
| /api/getHolidays   |  GET   | getting holidays | ```{}``` | api_key |
| /api/getTheCurrentDate   | GET    | getting the current date | ```{}``` | api_key |
| /api/getNextYear   | GET    | getting the next year  | ``` {} ```    | api_key |
| /api/getPreviousYear  | GET    | getting the previous year | ``` {} ```    | api_key |
| /api/getNextMonth  | GET    | getting the next month | ``` {} ```    | api_key |
| /api/getPreviousMonth  | GET    | getting the previous month | ``` {} ```    | api_key |
| /api/getEvange   | GET    | getting evange | ``` {} ```    | api_key |

#### <b>Admin</b>

This collection of end-points consists of requests to get and delete user by the adminstrator .


| End-point | Method | Description                     | Body/ Param                                           |
| --------- | ------ | ------------------------------- | ---------------------------------------------- |
| /users   | POST   | getting all the users | ``` {} ``` |
| /user/:id    | POST   | getting user by id | ``` id ```                 |
| /user/:username   | PUT    | getting user by username | ``` username ```    |
| /user/remove | Delete | removing user | ``` { id }```|

 <u>Headers</u>

 | Type | Value |
 | ---- | ----- |
 | Content-Type | application/json |
 | x-auth-token | token |

 <u>Response</u>
 
| Code | Message |
| ----- | ----- | 
| 200 | ``` { username, email, password, api_key, role, registerd_at, requests } ``` |
| 400 | ``` { msg: "Please enter all fields" } ``` ``` { msg: "user doesn't exist" } ```|
