window.BENCHMARK_DATA = {
  "lastUpdate": 1613399509749,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "6877aca931f336d313425657aefc3a575c182348",
          "message": "Merge pull request #65 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bbe7ba7",
          "timestamp": "2021-02-15T14:27:27Z",
          "tree_id": "3b2edabf1248ca0cd37fc6b16075f4fda85cb765",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6877aca931f336d313425657aefc3a575c182348"
        },
        "date": 1613399508644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1052.6404852135402,
            "unit": "iter/sec",
            "range": "stddev: 0.00021500868987298145",
            "extra": "mean: 949.9919621627878 usec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1507.3464084209,
            "unit": "iter/sec",
            "range": "stddev: 0.00024143478846757653",
            "extra": "mean: 663.4175093484998 usec\nrounds: 1337"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13520.417903650108,
            "unit": "iter/sec",
            "range": "stddev: 0.000007914105190625625",
            "extra": "mean: 73.96221086701988 usec\nrounds: 1859"
          }
        ]
      }
    ]
  }
}