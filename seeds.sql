INSERT INTO department (id, name)
VALUES
    (1, "Checkout"),
    (2, "Customer Service"),
    (3, "Meat Department");

SELECT * FROM roles

INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1, "Cashier, $12.00, 12 "),
    (2, "item returns, $10.00, 13 "),
    (3, "Butcher, $14.00, 14 ");

SELECT * FROM roles



INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Mark, Wallberg, 20, 02"),
    (2, "Adam, Smith, 30, 03"),
    (3, "Jason, Wonka, 40, 04");

SELECT * FROM employees