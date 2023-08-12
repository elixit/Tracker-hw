-- seeds for schema, department name, role, employee values added
INSERT INTO department (name)
VALUES  ("Checkout"),
        ("Customer Service"),
        ("Meat Department");

INSERT INTO role (title, salary, department_id)
VALUES  ("Cashier", 1000, 1),
        ("returns", 1200, 2),
        ("Butcher", 1400, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Ava", "Lord", 1, null),
        ("Dave", "The second", 2, 1),
        ("Michael", "Myers", 3, null);