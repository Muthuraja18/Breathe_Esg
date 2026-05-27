def detect_scope(source_type):

    if source_type == "SAP":
        return "SCOPE_1"

    elif source_type == "UTILITY":
        return "SCOPE_2"

    return "SCOPE_3"


def normalize_unit(quantity, unit):

    if unit == "Gallons":

        return quantity * 3.785, "Liters"

    return quantity, unit


def detect_suspicious(quantity):

    if quantity < 0:
        return True

    if quantity > 100000:
        return True

    return False