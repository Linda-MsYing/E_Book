create table book
(
    id           int          not null
        primary key,
    author       varchar(255) null,
    bookname     varchar(255) null,
    image        varchar(255) null,
    introduction varchar(255) null,
    isbn         varchar(255) null,
    price        int          null,
    inventory    int          null,
    state        int          null,
    type         varchar(255) null
);

create table helps
(
    id            int          not null
        primary key,
    address1      varchar(255) null,
    bookcount1    int          null,
    bookname1     varchar(255) null,
    receivername1 varchar(255) null,
    totalprice1   varchar(255) null,
    image         varchar(255) null
);

create table user
(
    id       int          not null
        primary key,
    password varchar(255) null,
    username varchar(255) null
);

create table carts
(
    id     int not null
        primary key,
    userid int null,
    constraint FK395gvtybe6uagdf26xrqipcb5
        foreign key (userid) references user (id)
);

create table cartitems
(
    id        int not null
        primary key,
    bookcount int null,
    bookid    int null,
    cartid    int null,
    constraint FK5vi0udj5ia7o0h6k6r0op1do6
        foreign key (cartid) references carts (id),
    constraint FK9nvbb045m890uqpxapqi2paf6
        foreign key (bookid) references book (id)
);

create table orders
(
    id           int          not null
        primary key,
    price        int          null,
    userid       int          null,
    address      varchar(255) null,
    receivername varchar(255) null,
    timestamp    datetime(6)  not null,
    constraint FKdxew8n76x1bnoxjas0qxrlbq6
        foreign key (userid) references user (id)
);

create table orderitems
(
    id        int          not null
        primary key,
    bookcount int          null,
    bookprice int          null,
    bookid    int          null,
    orderid   int          null,
    bookname  varchar(255) null,
    constraint FK1u6wgdi2nmp64all265wb1hp7
        foreign key (orderid) references orders (id),
    constraint FK302ptp4hkpaypehak7nk51w1y
        foreign key (bookid) references book (id)
);

create table userpros
(
    id      int          not null
        primary key,
    address varchar(255) null,
    name    varchar(255) null,
    tel     varchar(255) null,
    userid  int          null,
    constraint FK5lidmhvlsldpqrodmymgiblgc
        foreign key (userid) references user (id)
);

