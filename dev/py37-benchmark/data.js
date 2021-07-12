window.BENCHMARK_DATA = {
  "lastUpdate": 1626119697740,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "41dfd547f3d16b1f7222468901b174db97125612",
          "message": "Merge pull request #91 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-12T19:46:44Z",
          "tree_id": "236df4809c03a0b143fd0919be1d09ba1c466389"
        },
        "date": 1626119695469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 967.1926921568275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001667798494271375",
            "extra": "mean: 1.03392013619335 msec\nrounds: 536"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1304.2661081596084,
            "unit": "iter/sec",
            "range": "stddev: 0.00030738623401006495",
            "extra": "mean: 766.7147016578199 usec\nrounds: 1267"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8652.559884047958,
            "unit": "iter/sec",
            "range": "stddev: 0.000038369548114565526",
            "extra": "mean: 115.57273378062614 usec\nrounds: 1788"
          }
        ]
      }
    ]
  }
}