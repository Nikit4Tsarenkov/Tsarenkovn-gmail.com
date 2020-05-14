create database safcdb;
use safcdb;


create table visitors (
	id int not null auto_increment primary key,
    `name` varchar(50) not null,
    surname varchar(50) not null,
    address varchar(50) not null,
    phone_number varchar(20) not null
    
);

create table administrators (
	id int not null auto_increment primary key, 
	`name` varchar(50) not null, 
    surname varchar(50) not null,
    phone_number varchar(20) not null
    
);

create table `fields` (
	id int not null auto_increment primary key,
	type_name varchar(20) not null,
    price_for_hour int not null, 
    price_for_half_hour int not null,
    price_for_quater_hour int not null, 
    half varchar(10) not null,
    quater varchar(10) not null
    
);

create table orders (
	id int not null auto_increment primary key,
    visitor_id int not null,
    field_id int not null,
    administrator_id int not null,
    calendar_day varchar(11) not null,
    starts_at varchar(5) not null,
    ends_at varchar(5) not null,
    
    foreign key (visitor_id) references visitors(id),
	foreign key (administrator_id) references administrators(id),
    foreign key (field_id) references `fields`(id)
);

alter table orders add `order_status` ENUM ("IN_PROGRESS", "DONE");
alter table `fields` add `field_status` ENUM ("FREE", "BOOKED");

    
