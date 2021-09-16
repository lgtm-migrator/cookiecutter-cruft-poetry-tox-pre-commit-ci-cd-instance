window.BENCHMARK_DATA = {
  "lastUpdate": 1631802500151,
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
          "id": "845d724548a96cb34eb3585010e48412d1f4c61f",
          "message": "Merge pull request #225 from TeoZosa/dependabot/pip/hypothesis-6.21.3",
          "timestamp": "2021-09-15T13:28:06Z",
          "tree_id": "081bca677c9f4d73d14d5640b26fca40d81d51e1"
        },
        "date": 1631713988250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.0661677048369,
            "unit": "iter/sec",
            "range": "stddev: 0.0003796758251610354",
            "extra": "mean: 3.583379555552866 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 799.5336254865298,
            "unit": "iter/sec",
            "range": "stddev: 0.00024838896988685474",
            "extra": "mean: 1.2507291352399132 msec\nrounds: 769"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1672.2746764642654,
            "unit": "iter/sec",
            "range": "stddev: 0.00011350658846162008",
            "extra": "mean: 597.9878868430433 usec\nrounds: 760"
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
          "id": "9a9f5901d2ee5c25f714277e1c2692f07cb026c7",
          "message": ":green_heart: Fix ADR documentation publishing overwriting benchmark files\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bab682c",
          "timestamp": "2021-09-16T00:36:45Z",
          "tree_id": "983e09eaabaf97efc7ebfaaffadb1a7822b17fc7"
        },
        "date": 1631753154701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 331.15368793565347,
            "unit": "iter/sec",
            "range": "stddev: 0.00012023366708946093",
            "extra": "mean: 3.01974592592884 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 951.690875690745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199127606020971",
            "extra": "mean: 1.0507613612184648 msec\nrounds: 789"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2048.134432905668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000309168604811674",
            "extra": "mean: 488.2492008013898 usec\nrounds: 747"
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
          "id": "813e325d8932ce3c913421e0da8d21cef2c4cc68",
          "message": "Merge pull request #335 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@444a082",
          "timestamp": "2021-09-16T14:06:57Z",
          "tree_id": "027a3c94c6805f2929254f1e32eab2f542057766"
        },
        "date": 1631802497148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 290.8531317278053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003868024419056876",
            "extra": "mean: 3.43816136363919 msec\nrounds: 132"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.9232383327493,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642650662200452",
            "extra": "mean: 1.164248393070717 msec\nrounds: 837"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1721.6337175512915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002103309660672716",
            "extra": "mean: 580.843642759458 usec\nrounds: 725"
          }
        ]
      }
    ]
  }
}