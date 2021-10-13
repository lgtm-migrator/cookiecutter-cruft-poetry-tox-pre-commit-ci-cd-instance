window.BENCHMARK_DATA = {
  "lastUpdate": 1634132158153,
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
        "date": 1633123057058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.842968047427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040435216877879",
            "extra": "mean: 3.462088783950605 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.6841405828465,
            "unit": "iter/sec",
            "range": "stddev: 0.00018906740463795328",
            "extra": "mean: 1.1645725741728885 msec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1719.4351643525135,
            "unit": "iter/sec",
            "range": "stddev: 0.00009634922550437933",
            "extra": "mean: 581.5863376137065 usec\nrounds: 1869"
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
        "date": 1633354944374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.57841486822605,
            "unit": "iter/sec",
            "range": "stddev: 0.00022242096249935168",
            "extra": "mean: 3.709495808441544 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 781.8178620443452,
            "unit": "iter/sec",
            "range": "stddev: 0.00014551933689667043",
            "extra": "mean: 1.279070290598297 msec\nrounds: 936"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1583.0693373376641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007690948731909058",
            "extra": "mean: 631.6842708113819 usec\nrounds: 1898"
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "8679cb9c951d4061aaf3032e932da1056fc0cea6",
          "message": "Merge pull request #257 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1",
          "timestamp": "2021-10-04T13:25:39Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633355650867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.0268330905031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566402722792269",
            "extra": "mean: 3.40105013372094 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 769.6744923855292,
            "unit": "iter/sec",
            "range": "stddev: 0.00040500972157981295",
            "extra": "mean: 1.2992505401869299 msec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1714.2575653935578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272851939377408",
            "extra": "mean: 583.3429119330857 usec\nrounds: 2271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "13a2a5d9efa91bbe55c4495d18a97536657cb76b",
          "message": ":cookie: :art: Remove gratuitous newlines\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4e4a24f",
          "timestamp": "2021-10-12T17:40:15Z",
          "tree_id": "1858ad76937eb7dc75a59c085dd1f547330f2927"
        },
        "date": 1634060811576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 246.2173335748447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007081456571764779",
            "extra": "mean: 4.06145247972975 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 716.0438698133105,
            "unit": "iter/sec",
            "range": "stddev: 0.00046307891994044046",
            "extra": "mean: 1.3965624763476063 msec\nrounds: 909"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1433.8139066280685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003964553068930574",
            "extra": "mean: 697.4405781512622 usec\nrounds: 1785"
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
          "id": "231b24f12a51f2a9aa5ec6dcdc6f94cbe7fa30c0",
          "message": "Merge pull request #387 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f818a13",
          "timestamp": "2021-10-13T13:33:14Z",
          "tree_id": "c357d6e257253492795e87f59770d70b8c0e54ef"
        },
        "date": 1634132154952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.2615832034172,
            "unit": "iter/sec",
            "range": "stddev: 0.00041988959074521696",
            "extra": "mean: 3.517886549180307 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 803.1764221751166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023133317505413022",
            "extra": "mean: 1.2450564687791221 msec\nrounds: 1073"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1661.2334747014806,
            "unit": "iter/sec",
            "range": "stddev: 0.00011676008814129522",
            "extra": "mean: 601.9623461895972 usec\nrounds: 2152"
          }
        ]
      }
    ]
  }
}