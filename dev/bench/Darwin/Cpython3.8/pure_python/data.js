window.BENCHMARK_DATA = {
  "lastUpdate": 1633355747631,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633124265970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.09241748032196,
            "unit": "iter/sec",
            "range": "stddev: 0.00016636284380196613",
            "extra": "mean: 3.31024528301886 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.3942590208366,
            "unit": "iter/sec",
            "range": "stddev: 0.00008576302893554038",
            "extra": "mean: 1.0960174180328361 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1756.449311687818,
            "unit": "iter/sec",
            "range": "stddev: 0.00002946706848215314",
            "extra": "mean: 569.3304061470888 usec\nrounds: 1822"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7d9bcdecca698f0b988fa7e33cf25bd2f133f879",
          "message": "Merge pull request #363 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8bb3f64",
          "timestamp": "2021-10-04T13:20:51Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633355745140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 261.0840141750322,
            "unit": "iter/sec",
            "range": "stddev: 0.00033077438082713186",
            "extra": "mean: 3.830184713375804 msec\nrounds: 314"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 774.9807900196735,
            "unit": "iter/sec",
            "range": "stddev: 0.00023559082933896712",
            "extra": "mean: 1.2903545647558752 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1661.2252391048428,
            "unit": "iter/sec",
            "range": "stddev: 0.000056736206881947236",
            "extra": "mean: 601.9653304442049 usec\nrounds: 1846"
          }
        ]
      }
    ]
  }
}