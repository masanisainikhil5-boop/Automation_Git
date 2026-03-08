import re

def parse_test_output(stdout_content: str, stderr_content: str) -> List[TestResult]:
    results = []

    # Pattern for ctest output
    pattern = re.compile(r"Test\s+#?\d+:\s+([\w\-\./]+).*?(Passed|Failed|Skipped)", re.IGNORECASE)

    for line in stdout_content.splitlines():
        match = pattern.search(line)
        if match:
            test_name = match.group(1)
            status_str = match.group(2).lower()

            if status_str == "passed":
                status = TestStatus.PASSED
            elif status_str == "failed":
                status = TestStatus.FAILED
            elif status_str == "skipped":
                status = TestStatus.SKIPPED
            else:
                status = TestStatus.ERROR

            results.append(TestResult(name=test_name, status=status))

    return results