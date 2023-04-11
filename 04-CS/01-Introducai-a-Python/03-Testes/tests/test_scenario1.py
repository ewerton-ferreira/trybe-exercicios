def generate_simple_report(data):
    """Generate a simple report from data."""
    report = []
    for row in data:
        report.append(row['name'])
    return report

